import { Component, OnInit } from '@angular/core';
import { ServerService} from '../server.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  public values: any[];
  public temp: any;
  public title: string;
  public abstract: string;
  constructor(private serverService: ServerService) {}

  ngOnInit() {}
  onSubmit(form) {
    this.title = form.value['title'], this.abstract = form.value['abstract'];
    this.values = [];
    this.serverService.findJournals(this.title, this.abstract)
        .subscribe( data => {
            if (data.hasOwnProperty('response')) {
                this.temp = data['response'];
                for (const i in this.temp['docs']) {
                    this.values.push(this.temp['docs'][i]['journal'].toString());
                }
                this.values = this.values.filter((v, i, a) => a.indexOf(v) === i);
                this.values = this.values.slice(0, 10);
                }
            console.log(data.hasOwnProperty('response')); },
            // (response) => console.log(response),
            (error) => console.log(error)
        );
  }

   /*
    this.title = 'Long-term Recurrence and Complications Associated With Elective Incisional Hernia Repair.';
    this.abstract = 'Importance: Prosthetic mesh is frequently used to reinforce the repair of abdominal wall ' +
        'incisional hernias. The benefits of mesh for reducing the risk of hernia recurrence or the long-term ' +
        'risks of mesh-related complications are not known.Objective: To investigate the risks of long-term ' +
        'recurrence and mesh-related complications following elective abdominal wall hernia repair in a population ' +
        'with complete follow-up.Design, Setting, and Participants: Registry-based nationwide cohort study ' +
        'including all elective incisional hernia repairs in Denmark from January 1, 2007, to December 31, ' +
        '2010. A total of 3242 patients with incisional repair were included. Follow-up until November 1, 2014, ' +
        'was obtained by merging data with prospective registrations from the Danish National Patient ' +
        'Registry supplemented with a retrospective manual review of patient records. A 100% follow-up ' +
        'rate was obtained.Exposures: Hernia repair using mesh performed by either open or laparoscopic ' +
        'techniques vs open repair without use of mesh.Main Outcomes and Measures: Five-year risk of reoperation ' +
        'for recurrence and 5-year risk of all mesh-related complications requiring subsequent surgery.Results: ' +
        'Among the 3242 patients (mean age, 58.5 [SD, 13.5] years; 1720 women [53.1%]), 1119 underwent open ' +
        'mesh repair (34.5%), 366 had open nonmesh repair (11.3%), and 1757 had laparoscopic mesh repair ' +
        '(54.2%). The median follow-up after open mesh repair was 59 (interquartile range [IQR], 44-80) months, ' +
        'after nonmesh open repair was 62 (IQR, 44-79) months, and after laparoscopic mesh repair was 61 ' +
        '(IQR, 48-78) months. The risk of the need for repair for recurrent hernia following these initial ' +
        'hernia operations was lower for patients with open mesh repair (12.3% [95% CI, 10.4%-14.3%]; risk ' +
        'difference, -4.8% [95% CI, -9.1% to -0.5%]) and for patients with laparoscopic mesh repair (10.6% ' +
        '[95% CI, 9.2%-12.1%]; risk difference, -6.5% [95% CI, -10.6% to -2.4%]) compared with nonmesh repair ' +
        '(17.1% [95% CI, 13.2%-20.9%]). For the entirety of the follow-up duration, there was a progressively ' +
        'increasing number of mesh-related complications for both open and laparoscopic procedures. At 5 years ' +
        'of follow-up, the cumulative incidence of mesh-related complications was 5.6% (95% CI, 4.2%-6.9%) ' +
        'for patients who underwent open mesh hernia repair and 3.7% (95% CI, 2.8%-4.6%) for patients who ' +
        'underwent laparoscopic mesh repair. The long-term repair-related complication rate for patients with ' +
        'an initial nonmesh repair was 0.8% (open nonmesh repair vs open mesh repair: risk difference, 5.3% ' +
        '[95% CI, 4.4%-6.2%]; open nonmesh repair vs laparoscopic mesh repair: risk difference, 3.4% ' +
        '[95% CI, 2.7%-4.1%]).Conclusions and Relevance: Among patients undergoing incisional repair, sutured ' +
        'repair was associated with a higher risk of reoperation for recurrence over 5 years compared with ' +
        'open mesh and laparoscopic mesh repair. With long-term follow-up, the benefits attributable to mesh ' +
        'are offset in part by mesh-related complications.';
        */

}
