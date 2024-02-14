import web3mobile from '../assets/image-web-3-mobile.jpg';
import web3desktop from '../assets/image-web-3-desktop.jpg';
import retroPcs from '../assets/image-retro-pcs.jpg';
import topLaptops from '../assets/image-top-laptops.jpg';
import gamingGrowth from '../assets/image-gaming-growth.jpg';

const articles = [
    {
        title: 'The Bright Future Of Web 3.0?',
        content: 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
        image: {
            mobile: web3mobile,
            desktop: web3desktop,
        },
        mainArticle: true,
        newArticle: false,
        topArticle: false,
        position: null,
    },
    {
        title: 'Hydrogen VS Electric Cars',
        content: 'Will hydrogen-fueled cars ever catch up to EVs?',
        image: null,
        mainArticle: false,
        newArticle: true,
        topArticle: false,
        position: null,
    },
    {
        title: 'The Downsides of AI Artistry',
        content: 'What are the possible adverse effects of on-demand AI image generation?',
        image: null,
        mainArticle: false,
        newArticle: true,
        topArticle: false,
        position: null,
    },
    {
        title: 'Is VC Funding Drying Up?',
        content: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
        image: null,
        mainArticle: false,
        newArticle: true,
        topArticle: false,
        position: null,
    },
    {
        title: 'Reviving Retro PCs',
        content: 'What happens when old PCs are given modern upgrades?',
        image: retroPcs,
        mainArticle: false,
        newArticle: false,
        topArticle: true,
        position: 1,
    },
    {
        title: 'Top 10 Laptops of 2022',
        content: 'Our best picks for various needs and budgets.',
        image: topLaptops,
        mainArticle: false,
        newArticle: false,
        topArticle: true,
        position: 2,
    },
    {
        title: 'The Growth of Gaming',
        content: 'How the pandemic has sparked fresh opportunities.',
        image: gamingGrowth,
        mainArticle: false,
        newArticle: false,
        topArticle: true,
        position: 3,
    },
];

export default articles;