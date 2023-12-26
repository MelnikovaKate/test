import { IApplication } from "types/application.type";
const { v4: uuidv4 } = require('uuid');

export const applications: IApplication[] = [
    {
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },{
        guid: uuidv4(),
        date: new Date(2023, 3, 13),
        comment: 'Comment',
        isProcessed: false,
        files: [
            {
                uid: '-1',
                name: 'image.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-9',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            },
            {
                uid: '-19',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 3),
        comment: 'Comment 2',
        isProcessed: true,
        files: [{
            uid: '-2',
            name: 'image2.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 10),
        comment: 'Comment 3',
        isProcessed: true,
        files: [
            {
            uid: '-3',
            name: 'image3.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
            },
            {
                uid: '-29',
                name: 'image2.png',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                data: 'stringBase64',
            }
        ],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 9, 25),
        comment: 'Comment 4',
        isProcessed: false,
        files: [{
            uid: '-4',
            name: 'image4.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
    {
        guid: uuidv4(),
        date: new Date(2023, 5, 12),
        comment: 'Comment 5',
        isProcessed: false,
        files: [{
            uid: '-xxx',
            name: 'image5.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            data: 'stringBase64',
        }],
    },
]
    