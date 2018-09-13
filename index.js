
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
                    <div style={{height:"78px",width:"100%",backgroundColor:"white"}}>
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
                        {/*item?*/}
                            {this.state.stories.map(item=>{
                                return <div className={styles.box} key={item.title}>
                                <a href={item.url} className={styles.wrapper}>
                                    <img className={styles.common} src={`http://localhost:9900/imageforward?url=${item.images[0]}`}/>
                                    <span className={styles.title}>{item.title}</span>
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
                                        <img className={styles.logoo} src="http://daily.zhihu.com/img/new_home_v3/qr_top2.png"/>
                                    </div>
                                    <div className={styles.tip}>扫描下载客户端</div>
                                </div>
                            </div>
                    </div>
            </div>
        
    }
}



ReactDOM.render(<App />,document.body)