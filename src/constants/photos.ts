import { IPhoto } from "types/photoCard.type";

const { v4: uuidv4 } = require('uuid');

export const Photos: IPhoto[] = ([
    {
        id: '1',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag',
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '2',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '3',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '4',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '5',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '6',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '7',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '8',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '9',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '10',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '11',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '12',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '13',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '14',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '15',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '16',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '17',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '18',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '19',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '20',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '21',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '22',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '23',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '24',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '25',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '26',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '27',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '28',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment',
            },
        ]
    },
    {
        id: '29',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            }, {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
    {
        id: '30',
        image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        comments: [
            {
                id: uuidv4(),
                owner: {
                    id: '1',
                    fullName: 'Eliz Swonn',
                    username: 'admin'
                },
                text: 'comment comment comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment'
                    + 'comment comment comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '3',
                    fullName: 'Ninna Richi',
                    username: 'ninna00'
                },
                text: 'comment comment comment comment comment',
            },
            {
                id: uuidv4(),
                owner: {
                    id: '2',
                    fullName: 'Jong Dag',
                    username: 'jongdag'
                },
                text: 'comment comment comment',
            },
        ]
    },
]);