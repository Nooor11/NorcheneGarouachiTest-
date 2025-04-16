import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Stage } from '../norchenegarouachi-models/stage';
import { StageService } from '../norchenegarouachi-services/stage.service';

@Component({
  selector: 'app-norchenegarouachi-add-stage-ing',
  templateUrl: './norchenegarouachi-add-stage-ing.component.html',
  styleUrls: ['./norchenegarouachi-add-stage-ing.component.css']
})
export class NorchenegarouachiAddStageIngComponent implements OnInit {
  stageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stageService: StageService,
    private router: Router
  ) {
    this.stageForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]],
      entreprise: ['', [Validators.required, Validators.pattern('^[A-Z].*')]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.stageForm.valid) {
      const newStage: Stage = {
        ...this.stageForm.value,
        Titre: this.stageForm.value.titre,
        Description: this.stageForm.value.description,
        Entreprise: this.stageForm.value.entreprise,
        Disponible: true,
        nbrInteresse: 0,
        id: 0 // Will be set by json-server
      };

      this.stageService.addStage(newStage).subscribe(() => {
        this.router.navigate(['/norchenegarouachi-stages']);
      });
    }
  }
}