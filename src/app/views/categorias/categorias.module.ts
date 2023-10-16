import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CategoriasRoutingModule } from "./categorias-routing.module";
import { InserirCategoriaComponent } from "./inserir-categorias/inserir-categorias.component";
import { CategoriasService } from "./services/categorias.service";
import { CardCategoriaComponent } from './card-categoria/card-categoria.component';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './excluir-categoria/excluir-categoria.component';

@NgModule({
  declarations: [InserirCategoriaComponent, CardCategoriaComponent, ListarCategoriasComponent, EditarCategoriaComponent, ExcluirCategoriaComponent],
  imports: [CommonModule, CategoriasRoutingModule, ReactiveFormsModule],
  providers: [CategoriasService],
})
export class CategoriasModule {}