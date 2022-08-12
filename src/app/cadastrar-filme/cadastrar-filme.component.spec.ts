import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFilmeComponent } from './cadastrar-filme.component';

describe('CadastrarFilmeComponent', () => {
  let component: CadastrarFilmeComponent;
  let fixture: ComponentFixture<CadastrarFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarFilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
