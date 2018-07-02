<template>
    <div>
        <h2>push or pull 互换位置</h2>
        <Row :gutter="16" class="row">
            <Col span="18" push="6">6</Col>
            <Col span="6" pull="18">18</Col>
        </Row>
    </div>
</template>


<style>
    .row > *{
        background: #f5f5f5;
        border: 1px solid #000;
    }
</style>
