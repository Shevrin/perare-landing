export interface ITabsIndustries {
	name: string,
	image: string,
	list: ITabsList[],
  selected: boolean

}

export interface ITabsList {
	title: string,
	description: string,
}
