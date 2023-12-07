import instance from '../http'

// 产品入库
export const createProduct = (data) => {
  const {
    product_id,
    product_name,
    product_category,
    product_unit,
    product_in_warehouse_number,
    product_single_price,
    product_create_person,
    in_memo
  } = data
  return instance({
    url: '/pro/createProduct',
    method: 'POST',
    data: {
      product_id,
      product_name,
      product_category,
      product_unit,
      product_in_warehouse_number,
      product_single_price,
      product_create_person,
      in_memo
    }
  })
}

// 删除产品
export const deleteProduct = (id) => {
  return instance({
    url: '/pro/deleteProduct',
    method: 'POST',
    data: {
      id
    }
  })
}

// 编辑产品信息
export const editProduct = (data) => {
  const {
    id,
    product_name,
    product_category,
    product_unit,
    product_in_warehouse_number,
    product_single_price,
    in_memo
  } = data
  return instance({
    url: '/pro/editProduct',
    method: 'POST',
    data: {
      id,
      product_name,
      product_category,
      product_unit,
      product_in_warehouse_number,
      product_single_price,
      in_memo
    }
  })
}

// 获取产品列表
export const getProductList = () => {
  return instance({
    url: '/pro/getProductList',
    method: 'POST'
  })
}

// 产品申请出库
export const applyOutProduct = (data) => {
  const {
    id,
    product_out_id,
    product_single_price,
    product_out_number,
    product_out_apply_person,
    apply_memo
  } = data
  return instance({
    url: '/pro/applyOutProduct',
    method: 'POST',
    data: {
      id,
      product_out_id,
      product_single_price,
      product_out_number,
      product_out_apply_person,
      apply_memo
    }
  })
}

// 产品审核列表
export const applyProductList = () => {
  return instance({
    url: '/pro/applyProductList',
    method: 'POST'
  })
}

// 对产品进行撤回申请
export const withdrawApplyProduct = (data) => {
  const { id } = data
  return instance({
    url: '/pro/withdrawApplyProduct',
    method: 'POST',
    data: {
      id
    }
  })
}

// 产品审核
export const auditProduct = (data) => {
  const {
    id,
    product_out_id,
    product_out_status,
    audit_memo,
    product_out_price,
    product_out_audit_person,
    product_out_apply_person,
    product_in_warehouse_number,
    product_single_price,
    product_out_number
  } = data
  return instance({
    url: '/pro/auditProduct',
    method: 'POST',
    data: {
      id,
      product_out_id,
      product_out_status,
      audit_memo,
      product_out_price,
      product_out_audit_person,
      product_out_apply_person,
      product_in_warehouse_number,
      product_single_price,
      product_out_number
    }
  })
}

// 通过入库编号对产品进行搜索
export const searchProductForId = (product_id) => {
  return instance({
    url: '/pro/auditProduct',
    method: 'POST',
    data: {
      product_id
    }
  })
}

// 通过出库申请编号对产品进行搜索
export const searchProductForApplyId = (product_out_id) => {
  return instance({
    url: '/pro/searchProductForApplyId',
    method: 'POST',
    data: {
      product_out_id
    }
  })
}

// 通过出库编号对产品进行搜索
export const searchProductForOutId = (product_out_id) => {
  return instance({
    url: '/pro/searchProductForOutId',
    method: 'POST',
    data: {
      product_out_id
    }
  })
}

// 获取产品总数
export const getProductLength = () => {
  return instance({
    url: '/pro/getProductLength',
    method: 'POST'
  })
}

// 获取申请出库产品总数
export const getApplyProductLength = () => {
  return instance({
    url: '/pro/getApplyProductLength',
    method: 'POST'
  })
}

// 出库产品列表
export const auditProductList = () => {
  return instance({
    url: '/pro/auditProductList',
    method: 'POST'
  })
}

// 获取出库产品总数
export const getOutProductLength = () => {
  return instance({
    url: '/pro/getOutProductLength',
    method: 'POST'
  })
}

// 监听换页返回数据 产品页面
export const returnProductListData = (pager) => {
  return instance({
    url: '/pro/returnProductListData',
    method: 'POST',
    data: {
      pager
    }
  })
}

// 监听换页返回数据 申请出库页面
export const returnApplyProductListData = (pager) => {
  return instance({
    url: '/pro/returnApplyProductListData',
    method: 'POST',
    data: {
      pager
    }
  })
}

// 监听换页返回数据 出库页面
export const returnOutProductListData = (pager) => {
  return instance({
    url: '/pro/returnOutProductListData',
    method: 'POST',
    data: {
      pager
    }
  })
}
