// norchenegarouachi-stage-details/norchenegarouachi-stage-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stage } from '../norchenegarouachi-models/stage';
import { StageService } from '../norchenegarouachi-services/stage.service';

@Component({
  selector: 'app-norchenegarouachi-stage-details',
  templateUrl: './norchenegarouachi-stage-details.component.html',
  styleUrls: []
})
export class NorchenegarouachiStageDetailsComponent implements OnInit {
  stage: Stage | null = null;

  constructor(
    private route: ActivatedRoute,
    private stageService: StageService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID récupéré:', id); 
    
    if (id) {
      this.stageService.getStageById(+id).subscribe({
        next: (stage) => {
          console.log('Stage reçu:', stage); 
          this.stage = stage;
        },
        error: (err) => {
          console.error('Erreur:', err);
          alert('Stage non trouvé');
        }
      });
    }
  }
}