import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrls: ['./post-car.component.css']
})
export class PostCarComponent {

    postCarForm!: FormGroup;
    isSpinning: boolean = false;
    selectedFile: File | null = null;
    imagePreview: string | ArrayBuffer | null = null;
    listOfBrands: string[] = ['Toyota', 'Renault', 'Ford']; 
    listOfType: string[] = ['SUV', 'Sedan']; 

    
constructor(private fb: FormBuilder,
            private adminService:AdminService,
            private router: Router
) { }



ngOnInit() {
  this.postCarForm = this.fb.group({ 
    name: [null, Validators.required], 
    brand: [null, Validators.required], 
    type: [null, Validators.required], 
    price: [null, Validators.required], 
    description: [null, Validators.required], 
  })
}

  postCar() {
    console.log(this.postCarForm.value);
    this.isSpinning = true;
    const formData: FormData = new FormData();
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    formData.append('name', this.postCarForm.get('name')?.value);
    formData.append('brand', this.postCarForm.get('brand')?.value);
    formData.append('type', this.postCarForm.get('type')?.value);
    formData.append('price', this.postCarForm.get('price')?.value);
    formData.append('description', this.postCarForm.get('description')?.value);

    console.log(formData);

    this.adminService.postCar(formData).subscribe(
      (res) => {
        this.isSpinning = false;
        console.log('Car posted successfully:', res);
        
        alert('Car posted successfully!');
        this.router.navigateByUrl("/admin/dashboard")
      },
      (error) => {
        console.error('Error posting car:', error);
        
        alert('Failed to post car. Please try again.');
      }
    );
  }

    onFileSelected(event: Event): void {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        this.selectedFile = file;
  
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
      }
    }
}
