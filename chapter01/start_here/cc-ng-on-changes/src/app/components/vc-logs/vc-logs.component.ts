import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit, OnChanges {
  @Input() vName;
  logs: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { vName: vNameChanges} = changes;
    const curVal = vNameChanges.currentValue;
    if (vNameChanges.isFirstChange()) {
      this.logs.push(`initial version is ${curVal.trim()}`);
    } else {
      this.logs.push(`version changed to ${curVal.trim()}`);
    }
  }

}
