<template>
  <DxDataGrid
    id="gridUser"
    :data-source="dataSource"
    :remote-operations="false"
    :allow-column-reordering="true"
    :row-alternation-enabled="true"
    :show-borders="true"
    @content-ready="onContentReady"
  >
    <DxColumn :group-index="0" data-field="Product" />

    <DxColumn
      data-field="Amount"
      caption="Sale Amount"
      data-type="number"
      format="currency"
      alignment="right"
    />
    <DxColumn
      :allow-grouping="false"
      data-field="Discount"
      caption="Discount %"
      data-type="number"
      format="percent"
      alignment="right"
      cell-template="discountCellTemplate"
      css-class="bullet"
    />
    <DxColumn data-field="SaleDate" data-type="date" />
    <DxColumn data-field="Region" data-type="string" />
    <DxColumn data-field="Sector" data-type="string" />
    <DxColumn data-field="Channel" data-type="string" />
    <DxColumn :width="150" data-field="Customer" data-type="string" />

    <DxGroupPanel :visible="true" />
    <DxSearchPanel :visible="true" :highlight-case-sensitive="true" />
    <DxGrouping :auto-expand-all="false" />
    <DxPager :allowed-page-sizes="pageSizes" :show-page-size-selector="true" />
    <DxPaging :page-size="10" />
    <template #discountCellTemplate="{ data: cellData }">
      <DiscountCell :cell-data="cellData" />
    </template>
  </DxDataGrid>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxGrouping,
  DxGroupPanel,
  DxPager,
  DxPaging,
  DxSearchPanel
} from "devextreme-vue/data-grid";

import DataSource from "devextreme/data/data_source";

let collapsed = false;
export default {
  name: "users-table",
  components: {
    DxDataGrid,
    DxColumn,
    DxGrouping,
    DxGroupPanel,
    DxPager,
    DxPaging,
    DxSearchPanel
  },
  data() {
    return {
      dataSource: new DataSource({}),
      pageSizes: [10, 25, 50, 100],
      onContentReady: function(e) {
        if (!collapsed) {
          e.component.expandRow(["EnviroCare"]);
          collapsed = true;
        }
      }
    };
  },
  mounted() {}
};
</script>

<style>
#gridUser {
  height: calc(90vh - 210px);
  width: 100%;
  margin: auto;
}
</style>