import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VinoPage } from './vino.page';

describe('VinoPage', () => {
  let component: VinoPage;
  let fixture: ComponentFixture<VinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
