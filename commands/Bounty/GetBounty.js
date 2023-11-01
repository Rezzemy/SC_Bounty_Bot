const fs = require('node:fs');
const path = require('node:path');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getbounty')
		.setDescription('Gets Bounties'),
	async execute(interaction) {
		fs.readFile('bountystorage.json', 'utf-8', function readFileCallback(err, _data){
			if (err){
				console.log(err);
			} else {
				var data = JSON.parse(_data); //now its an object
				//console.log(data)
				var _fields = []
				//console.log("step 2")
				for (let index = 0; index < data.bounties.length; index++) {
					var element = data.bounties[index];
					const currentDate = new Date();
					const otherDate = new Date(element.date);
					const timeDifference = otherDate.getTime() - currentDate.getTime();
					const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
					console.log(daysDifference)
					if (Math.abs(daysDifference)>7) {
						data.bounties.splice(index, 1);
						store= JSON.stringify(data)
						console.log(store)
						fs.writeFile("bountystorage.json", store, 'utf-8', function(err) {
							if (err) throw err;
							//console.log('complete');
						})
					}
					else {
						_fields.push({
							name: "> "+element.user,
							value:`-- Commissioned by <@${element.commissioner}>\n-- Payout: ${(element.payout).toLocaleString(undefined,{ minimumFractionDigits: 0} )} AUEC\n-- Date Commissioned: ${element.date}`
						})
					}
					
					//console.log("step 1")
				}
				const exampleEmbed = {
					color: 0x0099ff,
					title: 'Current Bounties',
					author: {
						name: interaction.user.username,
					},
					//description: 'Current Hit-List Targets',
					fields: _fields,
					timestamp: new Date().toISOString(),
					footer: {
						text: 'Have you washed your feet recently?',
					},
				};
					interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
			}});
		
	},
};
