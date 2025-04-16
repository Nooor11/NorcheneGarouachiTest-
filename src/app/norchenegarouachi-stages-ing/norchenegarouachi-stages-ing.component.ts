import { Component, OnInit } from '@angular/core';
import { StageService } from '../norchenegarouachi-services/stage.service';
import { Stage } from '../norchenegarouachi-models/stage';

@Component({
  selector: 'app-norchenegarouachi-stages-ing',
  templateUrl: './norchenegarouachi-stages-ing.component.html',
  styleUrls: ['./norchenegarouachi-stages-ing.component.css']
})
export class NorchenegarouachiStagesIngComponent implements OnInit {
  stages: Stage[] = [];

  constructor(private stageService: StageService) { }

  ngOnInit(): void {
    this.loadStages();
  }

  loadStages(): void {
    this.stageService.getStages().subscribe(stages => {
      this.stages = stages;
    });
  }

  deleteStage(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce stage?')) {
      this.stageService.deleteStage(id).subscribe({
        next: () => {
          alert('Stage supprimé avec succès');
          this.loadStages();
        },
        error: () => alert('Erreur lors de la suppression')
      });
    }
  }
}