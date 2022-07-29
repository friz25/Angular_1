# A1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

================= ХОД РАБОТ : ===============================
установка angular cli на комп:
`npm install -g @angular/cli`
`ng version` проверка (установилось ли норм)

создание нового проекта (занимает 2,5 минуты)
`ng new my-app`

добавили TailWind:
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
запуск сайта (1,5 минуты):
npm start

в `tsconfig.json` добавляем строку:
"strictPropertyInitialization": false,

чтоб получать данные с API https://fakestoreapi.com/products > создали папку `services` > файл `products.services.ts`
```ts
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }
}
```
зарегать этот доп.модуль в `app`>`app.module.ts`


