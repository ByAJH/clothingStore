import {request} from 'network/request' 

export function getDetailData(iid) {
    return request({
        url: "/detail",
        params: {
            iid: iid
        }
    })
}

export function getRecommendData() {
    return request({
        url: "/recommend"
    })
}

export class GoodsData {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class ShopInfo {
    constructor(shopInfo) {
        this.name = shopInfo.name
        this.logo = shopInfo.shopLogo
        this.goodsNums = shopInfo.cGoods
        this.sellNums = shopInfo.cSells
        this.score = shopInfo.score
        this.services = shopInfo.services
        this.url = shopInfo.shopUrl
    }
}

export class DetailInfo {
    constructor(detailInfo) {
        this.desc = detailInfo.desc
        this.title = detailInfo.detailImage[0].key
        this.images = detailInfo.detailImage[0].list
    }
}