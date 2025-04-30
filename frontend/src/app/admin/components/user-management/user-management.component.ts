import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-management',
  template: `
    <div class="user-management">
      <h2>Kullanıcı Yönetimi</h2>
      <table mat-table [dataSource]="users">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>ID</th>
          <td mat-cell *matCellDef="let user">{{ user.id }}</td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Ad Soyad</th>
          <td mat-cell *matCellDef="let user">{{ user.name }}</td>
        </ng-container>

        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef>E-posta</th>
          <td mat-cell *matCellDef="let user">{{ user.email }}</td>
        </ng-container>

        <ng-container matColumnDef="role">
          <th mat-header-cell *matHeaderCellDef>Rol</th>
          <td mat-cell *matCellDef="let user">{{ user.role }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
  styles: [`
    .user-management {
      padding: 20px;
    }
    table {
      width: 100%;
    }
  `],
  standalone: true,
  imports: [MatTableModule]
})
export class UserManagementComponent implements OnInit {
  displayedColumns = ['id', 'name', 'email', 'role'];
  users: any[] = [];

  ngOnInit(): void {
    // TODO: Load users from service
  }
} 