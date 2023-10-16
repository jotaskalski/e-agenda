import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { CategoriasModule } from "../categorias/categorias.module";
import { DespesasRoutingModule } from "./despesas-routing.module";
import { InserirDespesaComponent } from "./inserir-despesa/inserir-despesa.component";
import { DespesasService } from "./services/despesas.service";
import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';
import { EditarDespesaComponent } from './editar-despesa/editar-despesa.component';

@NgModule({
  declarations: [InserirDespesaComponent, ListarDespesasComponent, EditarDespesaComponent],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    CategoriasModule,
  ],
  providers: [DespesasService],
})
export class DespesasModule {}