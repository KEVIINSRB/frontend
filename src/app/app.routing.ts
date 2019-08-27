import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
	{path : '', component: ClientesComponent},
	{path : 'clientes', component: ClientesComponent},
	{path : 'crear-cliente', component: CreateComponent},
	{path : 'cliente/:id', component: DetailComponent},
	{path : 'editar-cliente/:id', component: EditComponent},
	{path : '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);