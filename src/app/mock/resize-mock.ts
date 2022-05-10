export interface IProductListModel {
    productCd: string;  // 商品CD
    figureNumber: string; // 図番・品番
    productName: string; // 品名
    surfaceProcess: string; // 表面処理
    postProcess: string; // 後処理
    material: string; // 材質
    jancd: string; // JANCD
    registerDate: Date; // 新規登録日
    waste: number; // 廃番
  }

export const ProductList: IProductListModel[] = [
    {
        productCd: '0144000001',  // 商品CD
        figureNumber: 'SHIP-3221499', // 図番・品番
        productName: 'サポートL', // 品名
        surfaceProcess: '亜 鉛', // 表面処理
        postProcess: '３価クロメート(黄色)', // 後処理
        material: 'S65CM', // 材質
        jancd: '113', // JANCD
        registerDate: new Date('2015/01/01'), // 新規登録日
        waste: 0, // 廃番
    },
    {
        productCd: '0144000016',  // 商品CD
        figureNumber: 'SHIP-3221498', // 図番・品番
        productName: 'サポートP', // 品名
        surfaceProcess: '亜 鉛', // 表面処理
        postProcess: '３価クロメート(黄色)', // 後処理
        material: 'S65CM', // 材質
        jancd: '113', // JANCD
        registerDate: new Date('2018/11/29'), // 新規登録日
        waste: 0, // 廃番
    },
    {
        productCd: '0144000017',  // 商品CD
        figureNumber: 'SHIP-3220586', // 図番・品番
        productName: 'サポートB', // 品名
        surfaceProcess: '亜 鉛', // 表面処理
        postProcess: '３価クロメート(黄色)', // 後処理
        material: 'S65CM', // 材質
        jancd: '113', // JANCD
        registerDate: new Date('2019/05/10'), // 新規登録日
        waste: 0, // 廃番
    },
    {
        productCd: '0144000018',  // 商品CD
        figureNumber: 'SHIP-3220585', // 図番・品番
        productName: 'サポートA', // 品名
        surfaceProcess: '亜 鉛', // 表面処理
        postProcess: '３価クロメート(黄色)', // 後処理
        material: 'S65CM', // 材質
        jancd: '113', // JANCD
        registerDate: new Date('2019/05/11'), // 新規登録日
        waste: 0, // 廃番
    },
    {
        productCd: '0144000019',  // 商品CD
        figureNumber: '277181-16-38', // 図番・品番
        productName: 'ハンドスプリング', // 品名
        surfaceProcess: '亜 鉛', // 表面処理
        postProcess: '３価クロメート(黄色)', // 後処理
        material: 'S65CM', // 材質
        jancd: '113', // JANCD
        registerDate: new Date('2019/05/12'), // 新規登録日
        waste: 0, // 廃番
    },
    {
        productCd: '0144000020',  // 商品CD
        figureNumber: '60053800-001', // 図番・品番
        productName: 'ホルダー本体', // 品名
        surfaceProcess: '亜 鉛', // 表面処理
        postProcess: '３価クロメート(黄色)', // 後処理
        material: 'S65CM', // 材質
        jancd: '113', // JANCD
        registerDate: new Date('2019/05/13'), // 新規登録日
        waste: 0, // 廃番
    },
    {
        productCd: '0144000021',  // 商品CD
        figureNumber: '3JKDZE790', // 図番・品番
        productName: 'ＳＨＯＲＴ　ＰＩＥＣＥ', // 品名
        surfaceProcess: '亜 鉛', // 表面処理
        postProcess: '３価クロメート(黄色)', // 後処理
        material: 'S65CM', // 材質
        jancd: '113', // JANCD
        registerDate: new Date('2019/05/14'), // 新規登録日
        waste: 0, // 廃番
    },
    {
        productCd: '0144000022',  // 商品CD
        figureNumber: '3JKKZE790', // 図番・品番
        productName: 'ＳＨＯＲＴ　ＰＩＥＣＥ', // 品名
        surfaceProcess: '亜 鉛', // 表面処理
        postProcess: '３価クロメート(黄色)', // 後処理
        material: 'S65CM', // 材質
        jancd: '113', // JANCD
        registerDate: new Date('2019/05/15'), // 新規登録日
        waste: 0, // 廃番
    },
    {
        productCd: '0144000023',  // 商品CD
        figureNumber: 'SHIP-3221499', // 図番・品番
        productName: 'サポートL', // 品名
        surfaceProcess: '亜 鉛', // 表面処理
        postProcess: '３価クロメート(黄色)', // 後処理
        material: 'S65CM', // 材質
        jancd: '113', // JANCD
        registerDate: new Date('2019/05/16'), // 新規登録日
        waste: 0, // 廃番
    },
    {
        productCd: 'XXXXXXXXXE',  // 商品CD
        figureNumber: 'XXXXXXXXX1XXXXXXXXXE', // 図番・品番
        productName: 'XXXXXXXXX1XXXXXXXXX2XXXXXXXXXE', // 品名
        surfaceProcess: 'XXXXXXXXX1XXXXXXXXXE', // 表面処理
        postProcess: 'XXXXXXXXX1XXXXXXXXXE', // 後処理
        material: 'XXXXXXXXXE', // 材質
        jancd: 'XXXXE', // JANCD
        registerDate: new Date('2019/05/16'), // 新規登録日
        waste: 1, // 廃番
    },
    {
        productCd: 'XXXXXXXXXE',  // 商品CD
        figureNumber: 'XXXXXXXXX1XXXXXXXXXE', // 図番・品番
        productName: 'XXXXXXXXX1XXXXXXXXX2XXXXXXXXXE', // 品名
        surfaceProcess: 'XXXXXXXXX1XXXXXXXXXE', // 表面処理
        postProcess: 'XXXXXXXXX1XXXXXXXXXE', // 後処理
        material: 'XXXXXXXXXE', // 材質
        jancd: 'XXXXE', // JANCD
        registerDate: new Date('2019/05/16'), // 新規登録日
        waste: 1, // 廃番
    },
    {
        productCd: 'XXXXXXXXXE',  // 商品CD
        figureNumber: 'XXXXXXXXX1XXXXXXXXXE', // 図番・品番
        productName: 'XXXXXXXXX1XXXXXXXXX2XXXXXXXXXE', // 品名
        surfaceProcess: 'XXXXXXXXX1XXXXXXXXXE', // 表面処理
        postProcess: 'XXXXXXXXX1XXXXXXXXXE', // 後処理
        material: 'XXXXXXXXXE', // 材質
        jancd: 'XXXXE', // JANCD
        registerDate: new Date('2019/05/16'), // 新規登録日
        waste: 1, // 廃番
    },
    {
        productCd: 'XXXXXXXXXE',  // 商品CD
        figureNumber: 'XXXXXXXXX1XXXXXXXXXE', // 図番・品番
        productName: 'XXXXXXXXX1XXXXXXXXX2XXXXXXXXXE', // 品名
        surfaceProcess: 'XXXXXXXXX1XXXXXXXXXE', // 表面処理
        postProcess: 'XXXXXXXXX1XXXXXXXXXE', // 後処理
        material: 'XXXXXXXXXE', // 材質
        jancd: 'XXXXE', // JANCD
        registerDate: new Date('2019/05/16'), // 新規登録日
        waste: 1, // 廃番
    },
    {
        productCd: 'XXXXXXXXXE',  // 商品CD
        figureNumber: 'XXXXXXXXX1XXXXXXXXXE', // 図番・品番
        productName: 'XXXXXXXXX1XXXXXXXXX2XXXXXXXXXE', // 品名
        surfaceProcess: 'XXXXXXXXX1XXXXXXXXXE', // 表面処理
        postProcess: 'XXXXXXXXX1XXXXXXXXXE', // 後処理
        material: 'XXXXXXXXXE', // 材質
        jancd: 'XXXXE', // JANCD
        registerDate: new Date('2019/05/16'), // 新規登録日
        waste: 1, // 廃番
    },

];
