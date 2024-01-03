import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardImageService {

  constructor(private http: HttpClient) {}

  downloadCardImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }
  /*
  downloadCardImageFromHtmlPage(htmlUrl: string): Observable<Blob> {
    console.log("downloadCardImageFromHtmlPage:",htmlUrl);
    return this.http.get(htmlUrl, { responseType: 'text' }).pipe(
      switchMap((html: string) => {
        const imageUrl = this.getImageUrlFromHtmlPage(html);
        console.log("imageUrl de getImageUrlFromHtml", imageUrl)
        if (imageUrl) {
          return this.http.get(imageUrl, { responseType: 'blob' });
        } else {
          throw new Error('Image URL not found in HTML page.');
        }
      })
    );
  }

  saveCardImageLocally(blob: Blob, fileName: string): void {
    const objectURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectURL;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(objectURL);
  }

  checkIfImageExistsLocally(fileName: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const img = new Image();
      console.log("checkIfImageExistsLocally:",fileName)
      img.src = fileName;

      img.onload = () => {
        observer.next(true); // L'image existe
        observer.complete();
      };

      img.onerror = () => {
        observer.next(false); // L'image n'existe pas
        observer.complete();
      };
    });
  }

  getImageUrlFromHtmlPage(html: string): string | null {
    const match = html.match(/<img.*?src=["'](https:\/\/.*?)"['"]/);
    console.log(match)
    return match ? match[1] : null;
  }
  */
}
