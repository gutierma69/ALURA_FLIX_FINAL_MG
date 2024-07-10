export const EleccionBanner=(videos)=>{
    let rnd=Math.random()
    let item=Math.floor(rnd*(videos.length));
    return videos[item];
}