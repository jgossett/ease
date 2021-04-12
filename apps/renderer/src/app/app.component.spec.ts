import { TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    const testModule = TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule
      ],
      declarations: [
        AppComponent,
      ],
    });

    await testModule.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app)
      .toBeTruthy();
  });
});
