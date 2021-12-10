import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { BoardItemComponent } from './board-item/board-item.component';
import { CommentItemComponent } from './comment-item/comment-item.component';

import { DialogModule } from './dialog/dialog.module';
import { ColorPanelComponent } from './color-panel/color-panel.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent,
    CommentItemComponent,
    ColorPanelComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatExpansionModule,
    FormsModule,
    DialogModule,
    MatToolbarModule,
  ],
  exports: [BoardComponent, HeaderComponent],
})
export class BoardModule {}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './header/header.component';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { DialogModule } from './dialog/dialog.module';
// @NgModule({
//   declarations: [
//     HeaderComponent
//   ],
//   imports: [
//     CommonModule,
//     MatButtonModule,
//     MatIconModule,
//     MatToolbarModule,
//     DialogModule
//   ],
//   exports: [
//     HeaderComponent
//   ]
// })
// export class HeaderModule { }
