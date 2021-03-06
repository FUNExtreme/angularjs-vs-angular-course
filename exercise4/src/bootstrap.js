import * as angular from 'angular';
import { RootController } from './app/root.controller';
import { PizzeriaController } from './app/pizzeria.controller';
import { PizzaService } from './app/pizza.service';

var app = angular.module('app', []);

app.controller(RootController.iid, RootController);
app.controller(PizzeriaController.iid, PizzeriaController);
app.service(PizzaService.iid, PizzaService);