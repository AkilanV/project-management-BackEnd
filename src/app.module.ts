import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthModule } from './auth/auth.module';
// import { ProjectModule } from './projects/project.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { NotificationsGateway } from './notifications/notifications.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // ⬅️ your MySQL username
      password: 'root', // ⬅️ your MySQL password
      database: 'project_management', // ⬅️ your DB name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ⛔️ Only for development
    }),
    AuthModule,
    ProjectsModule,
    // AuthModule,
    // ProjectModule,
  ],
  providers: [NotificationsGateway],
})
export class AppModule {}
