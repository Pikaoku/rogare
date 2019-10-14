export const WeeTest = (name: string) => `Test ${name}`

export type Cooker<Model> = (data?: Partial<Model>) => Model

export function cook<Model>(data: Partial<Model> = {}, template: Model): Model {
	return { ...template, ...data }
}
