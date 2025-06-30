// src/notifications/notifications.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true }) // Enable CORS if needed
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  sendNotification(message: string) {
    this.server.emit('projectUpdate', { message });
  }
}
