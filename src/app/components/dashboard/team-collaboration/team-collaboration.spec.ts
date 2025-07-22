import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCollaboration } from './team-collaboration.component';

describe('TeamCollaboration', () => {
  let component: TeamCollaboration;
  let fixture: ComponentFixture<TeamCollaboration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamCollaboration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamCollaboration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
