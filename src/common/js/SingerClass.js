// 歌手信息类

export class Singer{
    constructor({id,name}){
        this.id=id
        this.name=name
        this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
    }
}

/**
 * 工厂方式创建类实例
 * @param {*} singer 
 */
export function createSinger(singer){
    return new Singer({
        id:singer.Fsinger_mid,
        name:singer.Fsinger_name
    })
}