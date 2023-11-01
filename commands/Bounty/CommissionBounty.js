const fs = require('node:fs');
const path = require('node:path');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commissionbounty')
		.setDescription('Commission a bounty')
		.addStringOption(option=>
			option.setName("target")
			.setDescription("Who exaaaaactly do you want to kill?")
			.setRequired(true)
		)
		.addNumberOption(option=>
			option.setName("payment")
			.setDescription("How much do you think their life is worth?")
			.setMinValue(500000)
			.setRequired(true)
		),
	async execute(interaction) {
		fs.readFile('bountystorage.json', 'utf-8', function readFileCallback(err, _data){
			if (err){
				console.log(err);
			} else {
				var data = JSON.parse(_data)
				var field = {user:interaction.options.getString("target"), payout:interaction.options.getNumber("payment"), date:new Date().toDateString(), commissioner:interaction.user.id}
				data.bounties.push({user:interaction.options.getString("target"), payout:interaction.options.getNumber("payment"), date:new Date().toDateString(), commissioner:interaction.user.id}) //"user":"Berlin-Phantom","payout":10000000,"date":"Tue Oct 31 2023","commissioner":"ThunderLake"
				store= JSON.stringify(data)
				fs.writeFile("bountystorage.json", store, 'utf-8', function(err) {
					if (err) throw err;
					//console.log('complete');
				})
				var _field=[]
				for (let index = 0; index < field; index++) {
					var element = field;
					_field.push({
						name: element.user,
						value:`Commissioned by ${element.commissioner}\nPayout: ${element.payout}\nDate Commissioned: ${element.date}`
					})
					//console.log("step 1")
				}
				const exampleEmbed = {
					color: 0x0099ff,
					title: 'Bounty Commissioned',
					author: {
						name: interaction.user.username,
					},
					//description: 'Current Hit-List Targets',
					fields: _field,
					timestamp: new Date().toISOString(),
					footer: {
						text: 'There might be a hit on you, you know?',
					},
				};
					interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
				}});
		
	},
};
