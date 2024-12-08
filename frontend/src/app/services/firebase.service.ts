import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { collectionData, doc, Firestore, Query } from '@angular/fire/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore,
  ) { 
    
  }

  // Método para agregar datos

  addItem(collectionName: string, data: any): Promise<any> {

    return this.firestore.collection(collectionName).add(data);

  }

  // Metodo para modificar datos

  putItem(collectionName: string, data: any, docId: string): Promise<any> {

    return this.firestore.collection(collectionName).doc(docId).set(data);

  }

  // Metodo para borrar datos

  deleteItem(collectionName: string, docId: string): Promise<any> {

    return this.firestore.collection(collectionName).doc(docId).delete();

  }

  // Método para obtener datos

  getData(collectionName: string): Observable<any[]> {
    return this.firestore.collection(collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  


  
  
  




}
