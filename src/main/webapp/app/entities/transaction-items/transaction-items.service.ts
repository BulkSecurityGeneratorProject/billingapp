import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITransactionItems } from 'app/shared/model/transaction-items.model';

type EntityResponseType = HttpResponse<ITransactionItems>;
type EntityArrayResponseType = HttpResponse<ITransactionItems[]>;

@Injectable({ providedIn: 'root' })
export class TransactionItemsService {
  public resourceUrl = SERVER_API_URL + 'api/transaction-items';

  constructor(protected http: HttpClient) {}

  create(transactionItems: ITransactionItems): Observable<EntityResponseType> {
    return this.http.post<ITransactionItems>(this.resourceUrl, transactionItems, { observe: 'response' });
  }

  update(transactionItems: ITransactionItems): Observable<EntityResponseType> {
    return this.http.put<ITransactionItems>(this.resourceUrl, transactionItems, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITransactionItems>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITransactionItems[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
