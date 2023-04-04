import { Constants } from "utils/constants"


function Footer({children, className, style}) {
	return (
		<footer 
		className={"w-full h-28 flex text-white bg-gray-800 items-center justify-center " + className}
		style={style}>
			<div className="flex flex-row divide-x divide-slate-500 items-center">
				<a 
				href={Constants.GitHubRepoLink} 
				target="_blank" 
				className="text-1xl px-2 font-normal hover:underline">
					<span>Проект на GitHub</span><i className="ml-1 bi bi-github" />
				</a>
				<a 
				href={Constants.SupportLink}
				target="_blank" 
				className="text-1xl px-2 font-normal hover:underline">
					<span>Сообщить об Ошибке</span><i className="ml-1 bi bi-telegram" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
