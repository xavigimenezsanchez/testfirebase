import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PolicyService } from '../../policy.service';

@Component({
  selector: 'app-policy-add',
  templateUrl: './policy-add.component.html',
  styleUrls: ['./policy-add.component.css']
})
export class PolicyAddComponent implements OnInit {

  policyForm;

  constructor(private policyService: PolicyService,
              private formBuilder: FormBuilder) { 
        this.policyForm = formBuilder.group({
          policyNumber: null,
          name: ''
        });
  }

  ngOnInit() {
  }

  onSubmit(policyData){
    this.policyService.createPolicy(policyData);
    //this.policyForm.clear();
  }

}