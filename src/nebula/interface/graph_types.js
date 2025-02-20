//
// Autogenerated by Thrift Compiler (0.14.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
// 1. 基于Thrift 0.14.1和修改版的common.thrift、graph.thrift生成
// 2. 基于生成文件针对typescript进行二次修改
// 除非你清楚自己在干什么，否则不要修改该文件
//
'use strict'

const thrift = require('../../thrift')
const Thrift = thrift.Thrift
const Q = thrift.Q
const Int64 = require('node-int64')

const common_ttypes = require('./common_types')


const ttypes = module.exports = {}

module.exports.ProfilingStats = ProfilingStats

function ProfilingStats(args) {
  this.rows = null
  this.exec_duration_in_us = null
  this.total_duration_in_us = null
  this.other_stats = null
  if (args) {
    if (args.rows !== undefined && args.rows !== null) {
      this.rows = args.rows
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field rows is unset!')
    }
    if (args.exec_duration_in_us !== undefined && args.exec_duration_in_us !== null) {
      this.exec_duration_in_us = args.exec_duration_in_us
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field exec_duration_in_us is unset!')
    }
    if (args.total_duration_in_us !== undefined && args.total_duration_in_us !== null) {
      this.total_duration_in_us = args.total_duration_in_us
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field total_duration_in_us is unset!')
    }
    if (args.other_stats !== undefined && args.other_stats !== null) {
      this.other_stats = Thrift.copyMap(args.other_stats, [null])
    }
  }
}
ProfilingStats.prototype = {}
ProfilingStats.prototype.read = function(input) {
  input.readStructBegin()
  while (true) {
    const ret = input.readFieldBegin()
    const ftype = ret.ftype
    const fid = ret.fid
    if (ftype == Thrift.Type.STOP) {
      break
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.I64) {
          this.rows = input.readI64()
        } else {
          input.skip(ftype)
        }
        break
      case 2:
        if (ftype == Thrift.Type.I64) {
          this.exec_duration_in_us = input.readI64()
        } else {
          input.skip(ftype)
        }
        break
      case 3:
        if (ftype == Thrift.Type.I64) {
          this.total_duration_in_us = input.readI64()
        } else {
          input.skip(ftype)
        }
        break
      case 4:
        if (ftype == Thrift.Type.MAP) {
          this.other_stats = {}
          const _rtmp31 = input.readMapBegin()
          const _size0 = _rtmp31.size || 0
          for (let _i2 = 0; _i2 < _size0; ++_i2) {
            let key3 = null
            let val4 = null
            key3 = input.readBinary()
            val4 = input.readBinary()
            this.other_stats[key3] = val4
          }
          input.readMapEnd()
        } else {
          input.skip(ftype)
        }
        break
      default:
        input.skip(ftype)
    }
    input.readFieldEnd()
  }
  input.readStructEnd()
}

ProfilingStats.prototype.write = function(output) {
  output.writeStructBegin('ProfilingStats')
  if (this.rows !== null && this.rows !== undefined) {
    output.writeFieldBegin('rows', Thrift.Type.I64, 1)
    output.writeI64(this.rows)
    output.writeFieldEnd()
  }
  if (this.exec_duration_in_us !== null && this.exec_duration_in_us !== undefined) {
    output.writeFieldBegin('exec_duration_in_us', Thrift.Type.I64, 2)
    output.writeI64(this.exec_duration_in_us)
    output.writeFieldEnd()
  }
  if (this.total_duration_in_us !== null && this.total_duration_in_us !== undefined) {
    output.writeFieldBegin('total_duration_in_us', Thrift.Type.I64, 3)
    output.writeI64(this.total_duration_in_us)
    output.writeFieldEnd()
  }
  if (this.other_stats !== null && this.other_stats !== undefined) {
    output.writeFieldBegin('other_stats', Thrift.Type.MAP, 4)
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.other_stats))
    for (const kiter5 in this.other_stats) {
      if (this.other_stats.hasOwnProperty(kiter5)) {
        const viter6 = this.other_stats[kiter5]
        output.writeBinary(kiter5)
        output.writeBinary(viter6)
      }
    }
    output.writeMapEnd()
    output.writeFieldEnd()
  }
  output.writeFieldStop()
  output.writeStructEnd()
}

module.exports.PlanNodeBranchInfo = PlanNodeBranchInfo

function PlanNodeBranchInfo(args) {
  this.is_do_branch = null
  this.condition_node_id = null
  if (args) {
    if (args.is_do_branch !== undefined && args.is_do_branch !== null) {
      this.is_do_branch = args.is_do_branch
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field is_do_branch is unset!')
    }
    if (args.condition_node_id !== undefined && args.condition_node_id !== null) {
      this.condition_node_id = args.condition_node_id
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field condition_node_id is unset!')
    }
  }
}
PlanNodeBranchInfo.prototype = {}
PlanNodeBranchInfo.prototype.read = function(input) {
  input.readStructBegin()
  while (true) {
    const ret = input.readFieldBegin()
    const ftype = ret.ftype
    const fid = ret.fid
    if (ftype == Thrift.Type.STOP) {
      break
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.BOOL) {
          this.is_do_branch = input.readBool()
        } else {
          input.skip(ftype)
        }
        break
      case 2:
        if (ftype == Thrift.Type.I64) {
          this.condition_node_id = input.readI64()
        } else {
          input.skip(ftype)
        }
        break
      default:
        input.skip(ftype)
    }
    input.readFieldEnd()
  }
  input.readStructEnd()
}

PlanNodeBranchInfo.prototype.write = function(output) {
  output.writeStructBegin('PlanNodeBranchInfo')
  if (this.is_do_branch !== null && this.is_do_branch !== undefined) {
    output.writeFieldBegin('is_do_branch', Thrift.Type.BOOL, 1)
    output.writeBool(this.is_do_branch)
    output.writeFieldEnd()
  }
  if (this.condition_node_id !== null && this.condition_node_id !== undefined) {
    output.writeFieldBegin('condition_node_id', Thrift.Type.I64, 2)
    output.writeI64(this.condition_node_id)
    output.writeFieldEnd()
  }
  output.writeFieldStop()
  output.writeStructEnd()
}

module.exports.Pair = Pair

function Pair(args) {
  this.key = null
  this.value = null
  if (args) {
    if (args.key !== undefined && args.key !== null) {
      this.key = args.key
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field key is unset!')
    }
    if (args.value !== undefined && args.value !== null) {
      this.value = args.value
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field value is unset!')
    }
  }
}
Pair.prototype = {}
Pair.prototype.read = function(input) {
  input.readStructBegin()
  while (true) {
    const ret = input.readFieldBegin()
    const ftype = ret.ftype
    const fid = ret.fid
    if (ftype == Thrift.Type.STOP) {
      break
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.key = input.readString()
        } else {
          input.skip(ftype)
        }
        break
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.value = input.readString()
        } else {
          input.skip(ftype)
        }
        break
      default:
        input.skip(ftype)
    }
    input.readFieldEnd()
  }
  input.readStructEnd()
}

Pair.prototype.write = function(output) {
  output.writeStructBegin('Pair')
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1)
    output.writeString(this.key)
    output.writeFieldEnd()
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 2)
    output.writeString(this.value)
    output.writeFieldEnd()
  }
  output.writeFieldStop()
  output.writeStructEnd()
}

module.exports.PlanNodeDescription = PlanNodeDescription

function PlanNodeDescription(args) {
  this.name = null
  this.id = null
  this.output_var = null
  this.description = null
  this.profiles = null
  this.branch_info = null
  this.dependencies = null
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field name is unset!')
    }
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!')
    }
    if (args.output_var !== undefined && args.output_var !== null) {
      this.output_var = args.output_var
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field output_var is unset!')
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = Thrift.copyList(args.description, [ttypes.Pair])
    }
    if (args.profiles !== undefined && args.profiles !== null) {
      this.profiles = Thrift.copyList(args.profiles, [ttypes.ProfilingStats])
    }
    if (args.branch_info !== undefined && args.branch_info !== null) {
      this.branch_info = new ttypes.PlanNodeBranchInfo(args.branch_info)
    }
    if (args.dependencies !== undefined && args.dependencies !== null) {
      this.dependencies = Thrift.copyList(args.dependencies, [null])
    }
  }
}
PlanNodeDescription.prototype = {}
PlanNodeDescription.prototype.read = function(input) {
  input.readStructBegin()
  while (true) {
    const ret = input.readFieldBegin()
    const ftype = ret.ftype
    const fid = ret.fid
    if (ftype == Thrift.Type.STOP) {
      break
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.name = input.readString()
        } else {
          input.skip(ftype)
        }
        break
      case 2:
        if (ftype == Thrift.Type.I64) {
          this.id = input.readI64()
        } else {
          input.skip(ftype)
        }
        break
      case 3:
        if (ftype == Thrift.Type.STRING) {
          this.output_var = input.readBinary()
        } else {
          input.skip(ftype)
        }
        break
      case 4:
        if (ftype == Thrift.Type.LIST) {
          this.description = []
          const _rtmp38 = input.readListBegin()
          const _size7 = _rtmp38.size || 0
          for (let _i9 = 0; _i9 < _size7; ++_i9) {
            let elem10 = null
            elem10 = new ttypes.Pair()
            elem10.read(input)
            this.description.push(elem10)
          }
          input.readListEnd()
        } else {
          input.skip(ftype)
        }
        break
      case 5:
        if (ftype == Thrift.Type.LIST) {
          this.profiles = []
          const _rtmp312 = input.readListBegin()
          const _size11 = _rtmp312.size || 0
          for (let _i13 = 0; _i13 < _size11; ++_i13) {
            let elem14 = null
            elem14 = new ttypes.ProfilingStats()
            elem14.read(input)
            this.profiles.push(elem14)
          }
          input.readListEnd()
        } else {
          input.skip(ftype)
        }
        break
      case 6:
        if (ftype == Thrift.Type.STRUCT) {
          this.branch_info = new ttypes.PlanNodeBranchInfo()
          this.branch_info.read(input)
        } else {
          input.skip(ftype)
        }
        break
      case 7:
        if (ftype == Thrift.Type.LIST) {
          this.dependencies = []
          const _rtmp316 = input.readListBegin()
          const _size15 = _rtmp316.size || 0
          for (let _i17 = 0; _i17 < _size15; ++_i17) {
            let elem18 = null
            elem18 = input.readI64()
            this.dependencies.push(elem18)
          }
          input.readListEnd()
        } else {
          input.skip(ftype)
        }
        break
      default:
        input.skip(ftype)
    }
    input.readFieldEnd()
  }
  input.readStructEnd()
}

PlanNodeDescription.prototype.write = function(output) {
  output.writeStructBegin('PlanNodeDescription')
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1)
    output.writeString(this.name)
    output.writeFieldEnd()
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 2)
    output.writeI64(this.id)
    output.writeFieldEnd()
  }
  if (this.output_var !== null && this.output_var !== undefined) {
    output.writeFieldBegin('output_var', Thrift.Type.STRING, 3)
    output.writeBinary(this.output_var)
    output.writeFieldEnd()
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.LIST, 4)
    output.writeListBegin(Thrift.Type.STRUCT, this.description.length)
    for (let iter19 in this.description) {
      if (this.description.hasOwnProperty(iter19)) {
        iter19 = this.description[iter19]
        iter19.write(output)
      }
    }
    output.writeListEnd()
    output.writeFieldEnd()
  }
  if (this.profiles !== null && this.profiles !== undefined) {
    output.writeFieldBegin('profiles', Thrift.Type.LIST, 5)
    output.writeListBegin(Thrift.Type.STRUCT, this.profiles.length)
    for (let iter20 in this.profiles) {
      if (this.profiles.hasOwnProperty(iter20)) {
        iter20 = this.profiles[iter20]
        iter20.write(output)
      }
    }
    output.writeListEnd()
    output.writeFieldEnd()
  }
  if (this.branch_info !== null && this.branch_info !== undefined) {
    output.writeFieldBegin('branch_info', Thrift.Type.STRUCT, 6)
    this.branch_info.write(output)
    output.writeFieldEnd()
  }
  if (this.dependencies !== null && this.dependencies !== undefined) {
    output.writeFieldBegin('dependencies', Thrift.Type.LIST, 7)
    output.writeListBegin(Thrift.Type.I64, this.dependencies.length)
    for (let iter21 in this.dependencies) {
      if (this.dependencies.hasOwnProperty(iter21)) {
        iter21 = this.dependencies[iter21]
        output.writeI64(iter21)
      }
    }
    output.writeListEnd()
    output.writeFieldEnd()
  }
  output.writeFieldStop()
  output.writeStructEnd()
}

module.exports.PlanDescription = PlanDescription

function PlanDescription(args) {
  this.plan_node_descs = null
  this.node_index_map = null
  this.format = null
  this.optimize_time_in_us = null
  if (args) {
    if (args.plan_node_descs !== undefined && args.plan_node_descs !== null) {
      this.plan_node_descs = Thrift.copyList(args.plan_node_descs, [ttypes.PlanNodeDescription])
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field plan_node_descs is unset!')
    }
    if (args.node_index_map !== undefined && args.node_index_map !== null) {
      this.node_index_map = Thrift.copyMap(args.node_index_map, [null])
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field node_index_map is unset!')
    }
    if (args.format !== undefined && args.format !== null) {
      this.format = args.format
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field format is unset!')
    }
    if (args.optimize_time_in_us !== undefined && args.optimize_time_in_us !== null) {
      this.optimize_time_in_us = args.optimize_time_in_us
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field optimize_time_in_us is unset!')
    }
  }
}
PlanDescription.prototype = {}
PlanDescription.prototype.read = function(input) {
  input.readStructBegin()
  while (true) {
    const ret = input.readFieldBegin()
    const ftype = ret.ftype
    const fid = ret.fid
    if (ftype == Thrift.Type.STOP) {
      break
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.LIST) {
          this.plan_node_descs = []
          const _rtmp323 = input.readListBegin()
          const _size22 = _rtmp323.size || 0
          for (let _i24 = 0; _i24 < _size22; ++_i24) {
            let elem25 = null
            elem25 = new ttypes.PlanNodeDescription()
            elem25.read(input)
            this.plan_node_descs.push(elem25)
          }
          input.readListEnd()
        } else {
          input.skip(ftype)
        }
        break
      case 2:
        if (ftype == Thrift.Type.MAP) {
          this.node_index_map = {}
          const _rtmp327 = input.readMapBegin()
          const _size26 = _rtmp327.size || 0
          for (let _i28 = 0; _i28 < _size26; ++_i28) {
            let key29 = null
            let val30 = null
            key29 = input.readI64()
            val30 = input.readI64()
            this.node_index_map[key29] = val30
          }
          input.readMapEnd()
        } else {
          input.skip(ftype)
        }
        break
      case 3:
        if (ftype == Thrift.Type.STRING) {
          this.format = input.readBinary()
        } else {
          input.skip(ftype)
        }
        break
      case 4:
        if (ftype == Thrift.Type.I32) {
          this.optimize_time_in_us = input.readI32()
        } else {
          input.skip(ftype)
        }
        break
      default:
        input.skip(ftype)
    }
    input.readFieldEnd()
  }
  input.readStructEnd()
}

PlanDescription.prototype.write = function(output) {
  output.writeStructBegin('PlanDescription')
  if (this.plan_node_descs !== null && this.plan_node_descs !== undefined) {
    output.writeFieldBegin('plan_node_descs', Thrift.Type.LIST, 1)
    output.writeListBegin(Thrift.Type.STRUCT, this.plan_node_descs.length)
    for (let iter31 in this.plan_node_descs) {
      if (this.plan_node_descs.hasOwnProperty(iter31)) {
        iter31 = this.plan_node_descs[iter31]
        iter31.write(output)
      }
    }
    output.writeListEnd()
    output.writeFieldEnd()
  }
  if (this.node_index_map !== null && this.node_index_map !== undefined) {
    output.writeFieldBegin('node_index_map', Thrift.Type.MAP, 2)
    output.writeMapBegin(Thrift.Type.I64, Thrift.Type.I64, Thrift.objectLength(this.node_index_map))
    for (const kiter32 in this.node_index_map) {
      if (this.node_index_map.hasOwnProperty(kiter32)) {
        const viter33 = this.node_index_map[kiter32]
        output.writeI64(kiter32)
        output.writeI64(viter33)
      }
    }
    output.writeMapEnd()
    output.writeFieldEnd()
  }
  if (this.format !== null && this.format !== undefined) {
    output.writeFieldBegin('format', Thrift.Type.STRING, 3)
    output.writeBinary(this.format)
    output.writeFieldEnd()
  }
  if (this.optimize_time_in_us !== null && this.optimize_time_in_us !== undefined) {
    output.writeFieldBegin('optimize_time_in_us', Thrift.Type.I32, 4)
    output.writeI32(this.optimize_time_in_us)
    output.writeFieldEnd()
  }
  output.writeFieldStop()
  output.writeStructEnd()
}

module.exports.ExecutionResponse = ExecutionResponse

function ExecutionResponse(args) {
  this.error_code = null
  this.latency_in_us = null
  this.data = null
  this.space_name = null
  this.error_msg = null
  this.plan_desc = null
  this.comment = null
  if (args) {
    if (args.error_code !== undefined && args.error_code !== null) {
      this.error_code = args.error_code
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field error_code is unset!')
    }
    if (args.latency_in_us !== undefined && args.latency_in_us !== null) {
      this.latency_in_us = args.latency_in_us
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field latency_in_us is unset!')
    }
    if (args.data !== undefined && args.data !== null) {
      this.data = new common_ttypes.DataSet(args.data)
    }
    if (args.space_name !== undefined && args.space_name !== null) {
      this.space_name = args.space_name
    }
    if (args.error_msg !== undefined && args.error_msg !== null) {
      this.error_msg = args.error_msg
    }
    if (args.plan_desc !== undefined && args.plan_desc !== null) {
      this.plan_desc = new ttypes.PlanDescription(args.plan_desc)
    }
    if (args.comment !== undefined && args.comment !== null) {
      this.comment = args.comment
    }
  }
}
ExecutionResponse.prototype = {}
ExecutionResponse.prototype.read = function(input) {
  input.readStructBegin()
  while (true) {
    const ret = input.readFieldBegin()
    const ftype = ret.ftype
    const fid = ret.fid
    if (ftype == Thrift.Type.STOP) {
      break
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.I32) {
          this.error_code = input.readI32()
        } else {
          input.skip(ftype)
        }
        break
      case 2:
        if (ftype == Thrift.Type.I32) {
          this.latency_in_us = input.readI32()
        } else {
          input.skip(ftype)
        }
        break
      case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.data = new common_ttypes.DataSet()
          this.data.read(input)
        } else {
          input.skip(ftype)
        }
        break
      case 4:
        if (ftype == Thrift.Type.STRING) {
          this.space_name = input.readString()
        } else {
          input.skip(ftype)
        }
        break
      case 5:
        if (ftype == Thrift.Type.STRING) {
          this.error_msg = input.readString()
        } else {
          input.skip(ftype)
        }
        break
      case 6:
        if (ftype == Thrift.Type.STRUCT) {
          this.plan_desc = new ttypes.PlanDescription()
          this.plan_desc.read(input)
        } else {
          input.skip(ftype)
        }
        break
      case 7:
        if (ftype == Thrift.Type.STRING) {
          this.comment = input.readString()
        } else {
          input.skip(ftype)
        }
        break
      default:
        input.skip(ftype)
    }
    input.readFieldEnd()
  }
  input.readStructEnd()
}

ExecutionResponse.prototype.write = function(output) {
  output.writeStructBegin('ExecutionResponse')
  if (this.error_code !== null && this.error_code !== undefined) {
    output.writeFieldBegin('error_code', Thrift.Type.I32, 1)
    output.writeI32(this.error_code)
    output.writeFieldEnd()
  }
  if (this.latency_in_us !== null && this.latency_in_us !== undefined) {
    output.writeFieldBegin('latency_in_us', Thrift.Type.I32, 2)
    output.writeI32(this.latency_in_us)
    output.writeFieldEnd()
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRUCT, 3)
    this.data.write(output)
    output.writeFieldEnd()
  }
  if (this.space_name !== null && this.space_name !== undefined) {
    output.writeFieldBegin('space_name', Thrift.Type.STRING, 4)
    output.writeString(this.space_name)
    output.writeFieldEnd()
  }
  if (this.error_msg !== null && this.error_msg !== undefined) {
    output.writeFieldBegin('error_msg', Thrift.Type.STRING, 5)
    output.writeString(this.error_msg)
    output.writeFieldEnd()
  }
  if (this.plan_desc !== null && this.plan_desc !== undefined) {
    output.writeFieldBegin('plan_desc', Thrift.Type.STRUCT, 6)
    this.plan_desc.write(output)
    output.writeFieldEnd()
  }
  if (this.comment !== null && this.comment !== undefined) {
    output.writeFieldBegin('comment', Thrift.Type.STRING, 7)
    output.writeString(this.comment)
    output.writeFieldEnd()
  }
  output.writeFieldStop()
  output.writeStructEnd()
}

module.exports.AuthResponse = AuthResponse

function AuthResponse(args) {
  this.error_code = null
  this.error_msg = null
  this.session_id = null
  if (args) {
    if (args.error_code !== undefined && args.error_code !== null) {
      this.error_code = args.error_code
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field error_code is unset!')
    }
    if (args.error_msg !== undefined && args.error_msg !== null) {
      this.error_msg = args.error_msg
    }
    if (args.session_id !== undefined && args.session_id !== null) {
      this.session_id = args.session_id
    }
  }
}
AuthResponse.prototype = {}
AuthResponse.prototype.read = function(input) {
  input.readStructBegin()
  while (true) {
    const ret = input.readFieldBegin()
    const ftype = ret.ftype
    const fid = ret.fid
    if (ftype == Thrift.Type.STOP) {
      break
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.I32) {
          this.error_code = input.readI32()
        } else {
          input.skip(ftype)
        }
        break
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.error_msg = input.readString()
        } else {
          input.skip(ftype)
        }
        break
      case 3:
        if (ftype == Thrift.Type.I64) {
          this.session_id = input.readI64()
        } else {
          input.skip(ftype)
        }
        break
      default:
        input.skip(ftype)
    }
    input.readFieldEnd()
  }
  input.readStructEnd()
}

AuthResponse.prototype.write = function(output) {
  output.writeStructBegin('AuthResponse')
  if (this.error_code !== null && this.error_code !== undefined) {
    output.writeFieldBegin('error_code', Thrift.Type.I32, 1)
    output.writeI32(this.error_code)
    output.writeFieldEnd()
  }
  if (this.error_msg !== null && this.error_msg !== undefined) {
    output.writeFieldBegin('error_msg', Thrift.Type.STRING, 2)
    output.writeString(this.error_msg)
    output.writeFieldEnd()
  }
  if (this.session_id !== null && this.session_id !== undefined) {
    output.writeFieldBegin('session_id', Thrift.Type.I64, 3)
    output.writeI64(this.session_id)
    output.writeFieldEnd()
  }
  output.writeFieldStop()
  output.writeStructEnd()
}

