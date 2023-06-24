module.exports = {
	async buscaBadges(badge) {
        const emojis = {
            1: '💼',
            2: '👩🏻‍🏫',
            3: '💰',
            4: '⚔️',
            5: '💸',
            6: '✈️',
            7: '☕️',
            8: '🍅',
            9: '🏆',
        };
        return emojis[badge];
    },
};