(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{1576:function(e,t,r){var a,n,i=Object.create,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of o(t))u.call(e,n)||n===r||l(e,n,{get:()=>t[n],enumerable:!(a=s(t,n))||a.enumerable});return e},h=(e,t,r)=>(d(e,"symbol"!=typeof t?t+"":t,r),r),m={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(m,{default:()=>y}),e.exports=c(l({},"__esModule",{value:!0}),m);var f=(n=null!=(a=r(959))?i(p(a)):{},c(a&&a.__esModule?n:l(n,"default",{value:a,enumerable:!0}),a));let b="64px",g={};class y extends f.Component{constructor(){super(...arguments),h(this,"mounted",!1),h(this,"state",{image:null}),h(this,"handleKeyPress",e=>{("Enter"===e.key||" "===e.key)&&this.props.onClick()})}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){let{url:t,light:r}=this.props;(e.url!==t||e.light!==r)&&this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:r}){if(!f.default.isValidElement(t)){if("string"==typeof t){this.setState({image:t});return}if(g[e]){this.setState({image:g[e]});return}return this.setState({image:null}),window.fetch(r.replace("{url}",e)).then(e=>e.json()).then(t=>{if(t.thumbnail_url&&this.mounted){let r=t.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),g[e]=r}})}}render(){let{light:e,onClick:t,playIcon:r,previewTabIndex:a}=this.props,{image:n}=this.state,i=f.default.isValidElement(e),l={display:"flex",alignItems:"center",justifyContent:"center"},s={preview:{width:"100%",height:"100%",backgroundImage:n&&!i?`url(${n})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...l},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:b,width:b,height:b,position:i?"absolute":void 0,...l},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},o=f.default.createElement("div",{style:s.shadow,className:"react-player__shadow"},f.default.createElement("div",{style:s.playIcon,className:"react-player__play-icon"}));return f.default.createElement("div",{style:s.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress},i?e:null,r||o)}}}}]);