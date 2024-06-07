import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  headers: any;

  constructor(private http: HttpClient) {
    setTimeout(() => this.getPlatform());
  }

  getPlatform(): void {

    this.headers = {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      // platform: platform,
      // appVersion: APP_VERSION,
      //type: 'USER',
    };
  }


  fetchData1(route:string ) {
    const options = {
      headers: { ...this.headers },
      //withCredentials: true,
    };
console.log("called........")
   
     this.http.get(
      route,options
    );

    console.log("finished........")
  }




  // fetchData({ route, authToken, params }: FetchParams) {
  //   const options = {
  //     headers: { ...this.headers, 'X-AUTH-TOKEN': authToken },
  //     withCredentials: true,
  //   };

  //   if (params === undefined) {
  //     return this.http.get(`${Routes.buildRoute(route)}`, options);
  //   }
  //   return this.http.get(
  //     `${Routes.buildRouteWithParams(route, params)}`,
  //     options
  //   );
  // }

  // fetchDataWithParams(
  //   route: string,
  //   params: string,
  //   authToken: string,
  //   requestTime?: number,
  //   isImageType?: boolean
  // ) {
  //   this.headers = { ...this.headers, 'X-AUTH-TOKEN': authToken };
  //   if (isImageType) {
  //     return this.http
  //       .get(`${Routes.buildRouteWithParams(route, params)}`, {
  //         headers: this.headers,
  //         responseType: 'blob',
  //         withCredentials: true,
  //       })
  //       .pipe(timeout(requestTime ? requestTime : requestWaitTime));
  //   } else {
  //     return this.http
  //       .get(`${Routes.buildRouteWithParams(route, params)}`, {
  //         headers: this.headers,
  //         withCredentials: true,
  //       })
  //       .pipe(timeout(requestTime ? requestTime : requestWaitTime));
  //   }
  // }

  // postData({ route, body, userDetails }: PostParams) {
  //   const options = {
  //     headers: { ...this.headers },
  //     withCredentials: true,
  //   };

  //   if (userDetails === undefined) {
  //     return this.http.post(`${Routes.buildRoute(route)}`, body, options);
  //   }

  //   options.headers = {
  //     ...this.headers,
  //     'X-AUTH-TOKEN': userDetails.authToken,
  //   };
  //   const params = `?username=${userDetails.email}`;
  //   return this.http.post(
  //     `${Routes.buildRouteWithParams(route, params)}`,
  //     body,
  //     options
  //   );
  // }

  // putData({ route, body, userDetails }: PostParams) {
  //   const options = {
  //     headers: { ...this.headers },
  //     withCredentials: true,
  //   };
  //   if (userDetails === undefined) {
  //     return this.http.put(`${Routes.buildRoute(route)}`, body, options);
  //   }

  //   options.headers = {
  //     ...options.headers,
  //     'X-AUTH-TOKEN': userDetails.authToken,
  //   };
  //   const params = `?username=${userDetails.email}`;
  //   return this.http.put(
  //     `${Routes.buildRouteWithParams(route, params)}`,
  //     body,
  //     options
  //   );
  // }

  // postDataWithAuth(
  //   route: string,
  //   userDetails: UserDetails,
  //   body: Record<string, unknown>
  // ) {
  //   this.headers = { ...this.headers, 'X-AUTH-TOKEN': userDetails.authToken };

  //   return this.http
  //     .post(
  //       `${Routes.buildRouteWithParams(
  //         route,
  //         `?username=${userDetails.email}`
  //       )}`,
  //       body,
  //       {
  //         headers: this.headers,
  //         withCredentials: true,
  //       }
  //     )
  //     .pipe(timeout(requestWaitTime));
  // }

  // deleteData({ body, route, userDetails, params }: DeleteParams) {
  //   const options = {
  //     headers: { ...this.headers, 'X-AUTH-TOKEN': userDetails.authToken },
  //     withCredentials: true,
  //     body,
  //   };

  //   if (params === undefined) {
  //     return this.http.delete(`${Routes.buildRoute(route)}`, options);
  //   }

  //   return this.http.delete(
  //     `${Routes.buildRouteWithParams(route, params)}`,
  //     options
  //   );
  // }

  // deleteDataWithParams(route: string, params: string, authToken: string) {
  //   this.headers = { ...this.headers, 'X-AUTH-TOKEN': authToken };

  //   return this.http
  //     .delete(`${Routes.buildRouteWithParams(route, params)}`, {
  //       headers: this.headers,
  //       withCredentials: true,
  //     })
  //     .pipe(timeout(requestWaitTime));
  // }

  // logout(userDetails: UserDetails) {
  //   return this.http.get(`${Routes.buildRoute(Routes.routes.logout)}`, {
  //     headers: { ...this.headers, 'X-AUTH-TOKEN': userDetails.authToken },
  //     responseType: 'text',
  //     withCredentials: true,
  //   });
  // }
// }

// export type FetchParams = {
//   route: string;
//   authToken: string;
//   params?: string;
// };

// export type PostParams = {
//   route: string;
//   body: Record<string, unknown>;
//   userDetails?: UserDetails;
// };

// export type DeleteParams = {
//   route: string;
//   params?: string;
//   userDetails: UserDetails;
//   body: Record<string, unknown>;
};
