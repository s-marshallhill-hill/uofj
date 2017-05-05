import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { DataService } from '../shared/services/data.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class GradeListItem {
    value: number;
    title: string;

    constructor(grade: Grade) {
        this.value = grade.id;
        this.title = grade.grade;
    }
}


export interface Grade {
    id: number;
    grade: string;
}

@Injectable()
export class GradeService {

    private gradeUrl: string = '/api/grades';

    constructor(private service: DataService) { }

    getGrades(): Observable<Grade[]> {
        return this.service.get(this.gradeUrl)
            .map((res: Response) => res.json());
    }
    private extractGradeListItems(res: Response) {
        let body = res.json();
        var gradeItems: GradeListItem[] = [];
        body.forEach(function (grade) {
            let s = new GradeListItem(grade);
            gradeItems.push(s);
        });
        return gradeItems;
    }
    
    getGradesList(): Observable<GradeListItem[]> {
        return this.service.get(this.gradeUrl)
            .map((res:Response) => this.extractGradeListItems(res))
    }
}
