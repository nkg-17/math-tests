import { useEffect, useState } from 'react'


let imageCounter = 0;

function useRandomPic() {
	const [ pic, setPic ] = useState(null);
	
	useEffect(() => {
		let controller = new AbortController();
		const signal = controller.signal;

		// fetch("https://api.waifu.pics/sfw/waifu", { signal })
		// 	.then((r) => r.json())
		// 	.then((j) => setPic(j['url']))
		// 	.catch((e) => {})

        imageCounter += 1;
        setPic(`https://picsum.photos/500?random=${imageCounter}`)
		
		return () => { if (controller) controller.abort(); };
	}, [])

	return pic;
}

export default useRandomPic
