import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Input,  } from '@angular/core';
import { Output ,} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Comment } from '../../../core/Models/comment.model';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone:true,
  imports: [ CommonModule, DatePipe, MatListModule , MatIconModule,
             MatFormFieldModule, MatButtonModule,    MatInputModule,
             ReactiveFormsModule ],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class CommentsComponent implements OnInit {


  @Input() comments!: Comment[];

  @Output() newComment = new EventEmitter<string>();


  commentCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(1)]);
  }

  

  onLeaveComment() {
    if (this.commentCtrl.invalid) {
        return;
    }
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
}



}
