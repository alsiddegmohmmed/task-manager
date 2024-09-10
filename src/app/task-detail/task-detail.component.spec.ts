import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDetailsComponent } from './task-detail.component';
describe('TaskDetailComponent', () => {
  let component: TaskDetailsComponent;
  let fixture: ComponentFixture<TaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
