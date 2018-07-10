import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import * as amqp from 'amqplib';
// import * as Amqp from 'amqp-ts';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // private socket;

  constructor(private httpClient: HttpClient) { }

  companies(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/kompany');
  }

  buses(params?: Params): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/companies/${params.name}/bus`);
  }

  tracker(params?: Params) {

    amqp.connect('amqp://172.17.0.2', function(err, conn) {
      conn.createChannel(function(err, ch) {
        const q = 'hello';

        ch.assertQueue(q, {durable: false});
        console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', q);
        ch.consume(q, function(msg) {
          console.log(' [x] Received %s', msg.content.toString());
        }, {noAck: true});
      });
    });

    // TODO: Implementar o socket para receber os Trackers do socket do back-end
    // this.socket = io('http://localhost:8080');
    // return this.httpClient.get(`http://localhost:8080/companies/${params.name}/bus/${params.registration}`);


    // const connection = new Amqp.Connection('amqp://172.17.0.2');
    // const queue = connection.declareQueue('front');
    // queue.activateConsumer((message) => {
    //     console.log('Message received: ' + message.getContent());
    //     // return Observable.of(message.getContent());
    // });
  }
}
