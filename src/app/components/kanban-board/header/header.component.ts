import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BoardService } from 'src/app/shared/services/board.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public boardService: BoardService,
    public authService: AuthService,) {}

  ngOnInit(): void {}

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event);
    }
  }
  Profile(){
    this.authService.Profile();
  }

}
