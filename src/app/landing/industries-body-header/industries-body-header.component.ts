import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ITabsIndustries } from '../../interfaces/tabs-industries';
import { IndustriesBodyItemComponent } from '../industries-body-item/industries-body-item.component';

@Component({
  selector: 'app-industries-body-header',
  templateUrl: './industries-body-header.component.html',
  styleUrls: ['./industries-body-header.component.sass']
})
export class IndustriesBodyHeaderComponent implements OnInit, AfterContentInit {

  @ContentChildren(IndustriesBodyItemComponent) tabsList!: QueryList<IndustriesBodyItemComponent>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    let activeTabs = this.tabsList.filter((item) => {
      return item.tab.selected
    });

    if (activeTabs.length === 0) {
      this.selectTab(this.tabsList.first.tab);
    }
  }

  public selectTab(tab: ITabsIndustries) {
    // deactivate all tabs
    this.tabsList.toArray().forEach((item: IndustriesBodyItemComponent) => item.tab.selected = false);

    // activate the tab the user has clicked on.
    tab.selected = true;
  }
}
