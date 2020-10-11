import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: "", redirectTo: "folder/Inbox", pathMatch: "full" },
	{
		path: "calculator/basic",
		loadChildren: () =>
			import("./pages/calculator/basic/module").then(
				(m) => m.CalculatorBasicPageModule
			),
	},
	{
		path: "calculator/postfix",
		loadChildren: () =>
			import("./pages/calculator/postfix/module").then(
				(m) => m.CalculatorPostfixPageModule
			),
	},
	{
		path: "calculator/scientific",
		loadChildren: () =>
			import("./pages/calculator/scientific/module").then(
				(m) => m.CalculatorScientificPageModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
