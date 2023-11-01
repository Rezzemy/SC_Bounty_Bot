const fs = require('node:fs');
const path = require('node:path');
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wipe')
		.setDescription('Gets Bounties')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		var data = {
			bounties: [
				
			]
		}
		store= JSON.stringify(data)
		fs.writeFile("bountystorage.json", store, 'utf-8', function(err) {
			if (err) throw err;
			console.log('complete');
			})
		//test



		await interaction.reply({ content:`Wiped. Clean slate. Current array is ${store}`, ephemeral: true });
	},
};
