let availableQuestions = [
    {
        id: 1,
        statement: 'I feel comfortable working and interacting with the colleagues on my team.',
    },
    {
        id: 2,
        statement: 'I like my work environment, and I believe it helps me perform at my best.',
    },
    {
        id: 3,
        statement: 'I feel like I have a healthy work/life balance.'
    },
    {
        id: 4,
        statement: 'I am satisfied with my roles and responsibilities.'
    },
    {
        id: 5,
        statement: 'My direct manager gives me necessary support and clear objectives.'
    },
    {
        id: 6,
        statement: 'I am satisfied with the amount of vacation time I am given'
    },
    {
        id: 7,
        statement: 'I am satisfied with the varieties of snacks provided in the office'
    },
    {
        id: 8,
        statement: 'I like the ambient music playing in the office hallways '
    },
    {
        id: 9,
        statement: 'I like our casual fridays'
    },
    {
        id: 10,
        statement: 'I liked our last team building day'
    }
];

const shuffleQuestions = () => {

    let shuffled = availableQuestions.slice();

    for (let i = availableQuestions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }

    return shuffled;
};

const provide = (take = 5) => {
    return shuffleQuestions().slice(0, take);
};

module.exports = {
    availableQuestions,
    shuffleQuestions,
    provide
};
