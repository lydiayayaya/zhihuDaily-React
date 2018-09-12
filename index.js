
import React from "react"
import ReactDOM from "react-dom"
import styles from "./index.css"


class App extends React.Component{

    constructor(){
        super()
        this.state = {
            stories:[]
        }
    }

    componentDidMount(){
        fetch("http://localhost:9900/zhihulist").then(resp=>resp.json()).then(data=>{
            console.log(data)
            this.setState({stories:data.stories})
        })
    }

    render(){

        console.log("render")
        console.log(this.state.stories)
        // let list = []

        // for(let i=0;i<2;i++){
        //     list.push({
        //         image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536660793059&di=2160b9fdea1b7aa78b905904f8bfef68&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0117e2571b8b246ac72538120dd8a4.jpg%401280w_1l_2o_100sh.jpg",
        //         url:"#",
        //         title:"最近在闹猪瘟，猪担心就好了，你没事"
        //     })
        // }

        // //在这里新增新的图片
        // list.push({
        //     image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536662007308&di=7c6312a0051bdb58a5c97a4b9173d067&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f09e577b85450000012e7e182cf0.jpg%401280w_1l_2o_100sh.jpg",
        //     url:"#",
        //     title:"土鸡蛋这种贵贵的鸡蛋，真的更有营养吗？"
        // })
        // list.push({
        //     image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1432768490,212778581&fm=26&gp=0.jpg",
        //     url:"#",
        //     title:"自己榨的豆浆就是没有外面卖的好喝，他们是加了秘方吗？"
        // })
        // list.push({
        //     image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536662444117&di=589f07acc9dedf07da6812c3f0fddfa0&imgtype=0&src=http%3A%2F%2Fpic60.nipic.com%2Ffile%2F20150303%2F12216461_110913232000_2.jpg",
        //     url:"#",
        //     title:"大误 · 孔乙己还欠 19 亿？"
        // })
        // list.push({
        //     image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536660793059&di=2160b9fdea1b7aa78b905904f8bfef68&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0117e2571b8b246ac72538120dd8a4.jpg%401280w_1l_2o_100sh.jpg",
        //     url:"#",
        //     title:"最近在闹猪瘟，猪担心就好了，你没事"
        // })
        return <div style={{width:"100vw"}} className={styles.app}>
                    {/*header*/}
                    <div style={{height:"78px",width:"100%",backgroundColor:"blsue"}}>
                        <div className={styles.header}>
                            <img className={styles.logo} src="http://daily.zhihu.com/img/new_home_v3/top_logo.png"/>
                            <div className={styles.link}>
                                <a  className={styles.download} href="javascript:;"><span>App 下载</span></a>
                                <a href="javascript:;" ><span>浏览内容</span></a>
                            </div>
                        </div>
                    </div>
                    {/*banner*/}
                    <div className={styles.banner}>
                        <div className={styles.wrap}>
                            <div className={styles.imageWrapper}>
                                <img src="http://daily.zhihu.com/img/new_home_v3/phone_sample.png" alt="知乎日报应用截屏" className={styles.phoneAnimation}/>
                            </div>
                            <div className={styles.right}>
                                <img className={styles.hh} src="http://daily.zhihu.com/img/new_home_v3/slogan.png"/>
                                <div className={styles.info}>在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，这个数字是 21。</div>
                                <div className={styles.infopic}>
                                    <img src="http://daily.zhihu.com/img/new_home_v3/qr_top2.png"/>
                                </div>
                                {/*右边图片*/}
                                <div className={styles.rinfopic}>
                                    <div className={styles.rintop}>
                                        <img className={styles.logooo} src="http://daily.zhihu.com/img/new_home_v3/iphone_logo.png"/>
                                        <span>iOS 版</span>
                                    </div>
                                    <div className={styles.rinbottom}>
                                        <img className={styles.logooo} src="http://daily.zhihu.com/img/new_home_v3/android_logo.png"/>
                                        <span>Android 版</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*section */}
                    <div className={styles.section}>
                        <div className={styles.head}>
                            <span className={styles.headlf}>浏览内容</span>
                            <span className={styles.headrf}>最新内容</span>
                        </div>
                        <div className={styles.artical}>
                            {this.state.stories.map(item=>{
                                return <div className={styles.box} key={item.title}>
                                <a href={item.url} className={styles.wrapper}>
                                    <img className={styles.common} src={`http://localhost:9900/imageforward?url=${item.images[0]}`}/>
                                    <span class="title">{item.title}</span>
                                </a>
                            </div>
                            })}
                        </div>
                        <a href="javascript:;" className={styles.more}>更多精彩内容可在知乎日报应用中查看</a>
                    </div>
                    {/*footer*/}
                    <div className={styles.footer}>
                            <div className={styles.fcontent}>
                                <div className={styles.infowrap}>
                                    <p>知乎日报是一款拥有千万用户的资讯类客户端，每日提供来自知乎社区的精选问答，还有国内一流媒体的专栏特稿。</p>
                                    <p>主题日报包括动漫、设计、大公司、游戏、财经、电影、电子音乐、互联网安全等丰富内容，为业内人和资深爱好</p>
                                    <span>者推荐各领域最精彩文章，满足高质量阅读需求。</span>
                                    <p>在知乎日报，告别浮躁，重获阅读的愉悦。</p>
                                    <p>© 2018 知乎</p>
                                </div>
                                <div className={styles.rbottom}>
                                    <div className={styles.imgbott}>
                                        <img className={styles.logoo} src="data:image/jpeg;base64,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
                                        P2CGMHODbGTlzxkFDd0yioW7XYLi2WWNe3MaE6zNJrXzOY2u/nNcI6znOdM5zrb+c54zrOe98znPvv5z4AOtKAHTehCG/rQiE60ohfN6EYTJCAAOw=="/>
                                    </div>
                                    <div className={styles.tip}>扫描下载客户端</div>
                                </div>
                            </div>
                    </div>
            </div>
        
    }
}



ReactDOM.render(<App />,document.body)